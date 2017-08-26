//------------------------------------------------------------

//Slide toggle show page


$('.book-details').on('click', function(){
    console.log('hello');
    
    $('.plus-details').toggleClass('hower');
    
    $('.product-details-row').slideToggle(500,function()
{

    $('.product-details-row').animate({visibility:'block'},100);

}
                        
);
    
    
    
});

$(window).on('load', function()
{

console.log('Hello');
}
            
);


//--------------------------------------------------------------