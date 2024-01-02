let currentTheme = 'light'
function changeTheme(){
  const theme = document.getElementById("css")
  if(currentTheme === "light"){
    currentTheme = "dark"
    
  }else{
    currentTheme = "light"
  }

theme.setAttribute('href',`${currentTheme}-theme.css`)
}



