import displayComments from './displayComments.js';

export const loadComments = async (itemId) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/comments?item_id=${itemId}`, {
    method: 'GET',
    redirect: 'follow',
  }).then((response) => response.json())
    .then((result) => {
      displayComments(result);
    }).catch(() => {
      throw new Error('Failed to to load comments');
    });
};

const createComments = async (itemId, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    redirect: 'follow',
  })
    .then(() => {
      loadComments(itemId);
    })
    .catch(() => {
      throw new Error('Failed to to creat a new comments');
    });
};

export default createComments;