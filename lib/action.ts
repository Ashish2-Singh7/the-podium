export async function likeDislikeArticleFunction(articleSlug: string, userAction: string | null) {

    try {
        // Make the PATCH request to your backend API route
        const res = await fetch(`/api/article/like-dislike-article/${articleSlug}`, {
            method: 'PATCH', // Use PATCH for partial updates (modifying arrays)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userAction }),
        });

        const data = await res.json(); // Parse the JSON response from the server

        if (!res.ok) {
            // If response is not OK (e.g., 401, 400, 500), throw an error
            throw new Error(data.message || 'Failed to update reaction.');
        }

    } catch (err: any) {
        console.error('Error updating reaction:', err); // Log the error for debugging
    }
}