using ForumApp.API.Models;
using ForumApp.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ForumApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly PostService _postService;

        public PostsController(PostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public async Task<List<Post>> Get() =>
            await _postService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Post>> Get(string id)
        {
            var post = await _postService.GetAsync(id);

            if (post is null)
            {
                return NotFound();
            }

            return post;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Post newPost)
        {
            await _postService.CreateAsync(newPost);

            return CreatedAtAction(nameof(Get), new { id = newPost.Id }, newPost);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Post updatedPost)
        {
            var post = await _postService.GetAsync(id);

            if (post is null)
            {
                return NotFound();
            }

            updatedPost.Id = post.Id;

            await _postService.UpdateAsync(id, updatedPost);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var post = await _postService.GetAsync(id);

            if (post is null)
            {
                return NotFound();
            }

            await _postService.RemoveAsync(id);

            return NoContent();
        }
    }
}