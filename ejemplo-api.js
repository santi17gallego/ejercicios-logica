// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => {
// // Mostrar los datos de los usuarios en la consola
// users.forEach(user => {
//     console.log(`ID: ${user.id}, Nombre: ${user.name}, Email: ${user.email}`);
// });
// })
// .catch(error => {
// console.error('Error:', error);
// });




// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => {
//     console.log('Datos de usuarios:', users);
// })
// .catch(error => {
// console.error('Error al obtener datos de usuarios:', error);
// });



// const nuevoUsuario = {
// name: 'John Doe',
// username: 'johndoe',
// email: 'johndoe@example.com',
// };

// fetch('https://jsonplaceholder.typicode.com/users', {
// method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
// },
// body: JSON.stringify(nuevoUsuario),
// })
// .then(response => response.json())
// .then(usuarioCreado => {
//     console.log('Nuevo usuario creado:', usuarioCreado);
// })
// .catch(error => {
//     console.error('Error al crear nuevo usuario:', error);
// });



// const usuarioActualizado = {
//     id: 1,
//     name: 'John Doe (Actualizado)',
//     username: 'johndoe_updated',
//     email: 'johndoe_updated@example.com',
//     };
    
//     fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(usuarioActualizado),
//     })
//     .then(response => response.json())
//     .then(usuarioModificado => {
//         console.log('Usuario modificado:', usuarioModificado);
//     })
//     .catch(error => {
//         console.error('Error al modificar usuario:', error);
//     });



// fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'DELETE',
//     })
//     .then(response => {
//         if (response.ok) {
//         console.log('Usuario eliminado exitosamente');
//         } else {
//         throw new Error('Error al eliminar usuario');
//         }
//     })
//     .catch(error => {
//         console.error('Error al eliminar usuario:', error);
//     });