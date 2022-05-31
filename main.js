var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/JnL6wtrd/sister.jpg","https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-girl-free-of-charge-png-image_4633658.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Roa Nalluri",  "Teja Nalluri", "Aasini Nalluri" ,"Srilatha Nalluri"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i]
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
