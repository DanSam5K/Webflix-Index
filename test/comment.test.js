/**
 * @jest-environment jsdom
 */
import movieCommentForm from "../src/movieComment";
import createComments, {loadComments} from "../src/involvementAPI";
import loadCommentsContainer from './__mock__/loadCommentsContainerMocks';


describe('Test comments', () => {

    test('Create comments', () => {
        fetch.mockResponseOnce(JSON.stringify([{item_id: 500, username: 'jaar', comment: 'test'}]));  
        return loadComments(500).then(() => {
            const comments = loadCommentsContainer.querySelectorAll('li');
            return comments;
        })
        .then((comments) => {
            expect(comments.length).not.toBe(0);
        });
    })
})