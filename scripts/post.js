import { Parse as Parse } from 'parse';

var Post = Parse.Object.extend('Post', {
    someMethod: function () {
        return 42;
    }
}, {
    create: function (title, content, tags, author) {
        tags = tags || [];

        var post = new Post();

        post.set('title', title);
        post.set('content', content);
        post.set('tags', tags);
        post.set('author', author);
        post.set('views', 0);
        post.set('likes', 0);

        post.save(null, {
            success: function () {
                // TODO: remove that crap
                console.log('Created post..');
            },
            error: function (post, error) {
                throw new Error(`Could not create post: ${error.message}` +
                ` (${error.code}).`);
            }
        });

        return post;
    }
});

export default Post;
