console.log($(document).height() , $(document).width())
if(window.innerHeight < window.innerWidth)
{   
    $('.harkirat').click(()=>{
        $('.harkirat').css("display", "none");
        $('.gursimran').css("display", "block");
    })
    $('.gursimran').click(()=>{
        $('.gursimran').css("display", "none");
        $('.sirish').css("display", "block");
    })
    $('.sirish').click(()=>{
        $('.sirish').css("display", "none");
        $('.lieza').css("display", "block");
    })
    $('.lieza').click(()=>{
        $('.lieza').css("display", "none");
        $('.harkirat').css("display", "block");
    })
}