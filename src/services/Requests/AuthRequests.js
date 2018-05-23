// export const newUserSchema = (data: any, image: ?File) => {
//     const storageService = new StorageService()
//     const persistenceService = new PersistenceService(storageService)
//     const formData = new FormData()
//     formData.append("data", JSON.stringify(data))
//     if (image) {
//         formData.append("image", image)
//     }
//     return {
//         method: 'post',
//         url: '/admin/newUser',
//         headers: {
//             'Authorization': persistenceService.getToken()
//         },
//         data: formData
//     }
// }