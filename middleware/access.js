export default function ({redirect, $auth} ) {
  // If the user is not authenticated
  if (!$auth.loggedIn || $auth.user.id !== 6) {
    // console.log('Нет доступа!');
    // console.log($auth.loggedIn)
    return redirect('/admin/login')
  }
}
