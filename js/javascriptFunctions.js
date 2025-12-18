function showHidden(elementID, btnID) 
{
    if (document.getElementById(elementID).style.display == 'none') 
    { 
        document.getElementById(elementID).style.display = 'block';
    } 
    
    else 
    {
        document.getElementById(elementID).style.display = 'none';
    }
}


