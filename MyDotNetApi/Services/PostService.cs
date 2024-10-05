using ForumApp.API.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ForumApp.API.Services
{
    public class PostService
    {
        private readonly IMongoCollection<Post> _posts;

        public PostService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var mongoClient = new MongoClient(mongoDBSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _posts = mongoDatabase.GetCollection<Post>("Posts");
        }

        public async Task<List<Post>> GetAsync() =>
            await _posts.Find(_ => true).ToListAsync();

        public async Task<Post?> GetAsync(string id) =>
            await _posts.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Post newPost) =>
            await _posts.InsertOneAsync(newPost);

        public async Task UpdateAsync(string id, Post updatedPost) =>
            await _posts.ReplaceOneAsync(x => x.Id == id, updatedPost);

        public async Task RemoveAsync(string id) =>
            await _posts.DeleteOneAsync(x => x.Id == id);
    }
}