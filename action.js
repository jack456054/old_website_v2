function dropdownMenu() {
                var x = document.getElementById("dropdownClick");
                if (x.className === "topnav") {
                    x.className += " responsive";
                    /*change topnav to topnav.responsive*/
                } 
                else {
                    x.className = "topnav";    
                }
            }

function recoverDropdownMenu() {
                var x = document.getElementById("dropdownClick");
                x.className = "topnav";    
            }