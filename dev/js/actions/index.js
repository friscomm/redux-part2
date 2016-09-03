export const selectUser = (user) => {
  console.log(`You clicked on user ${user.first}, they are ${user.age}`)
  return{
    type: 'USER_SELECTED',
    payload: user
  }
} ;
