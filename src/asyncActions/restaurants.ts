export const restaurantsApi = {
    get: () => fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
        .then(response => response.json())
}
