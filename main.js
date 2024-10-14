document.addEventListener('DOMContentLoaded', function () {
    function getValues() {
        let width = parseInt($('#width').val());
        let height = parseInt($('#height').val());

        let lebar = `w-[${width}px]`;
        let tinggi = `h-[${height}px]`;

        let templet = [lebar, tinggi, 'shadow-xl', 'border-2', 'border-black', 'bg-white'];
        let kotak = $('#kotak');

        $.each(templet, function (index, cls) {
            kotak.addClass(cls);
        });

        let text = `Classes added: ${templet.join(' ')}`;
        $('#code').html(text);
    }

    document.querySelector('button').onclick = getValues;
});

