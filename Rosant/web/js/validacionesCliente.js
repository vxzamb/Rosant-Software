
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
            return (
                key == 8 || 
                key == 9 ||
                key == 46 ||
                key == 16 ||
                (key >= 37 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
            
        });
    });
};





$("#mdw_rosantbundle_clientestype_cedula").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoFijo").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoMovil").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoEmpresa").ForceNumericOnly();

$("#mdw_rosantbundle_clientestype_cedula").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoFijo").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoMovil").ForceNumericOnly();
$("#mdw_rosantbundle_clientestype_telefonoEmpresa").ForceNumericOnly();


