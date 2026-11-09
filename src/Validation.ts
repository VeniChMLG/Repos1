export function validateItem(name: string, iloscTekstu: string): string | null {
    if (!name) {
        return 'Nazwa nie może być pusta';
    }

    const przycietaNazwa = name.trim();
    if(przycietaNazwa.length < 2 || przycietaNazwa.length > 30) {
        return 'Nazwa musi mieć od 2 do 30 znaków';
    }

    if (!iloscTekstu || iloscTekstu.length > 30) {
        return 'Ilość nie może być pusta';
    }
    const ilt = Numer(iloscTekstu);
    if (isNaN(ilt) || !Numer.isInteger(ilt) || ilt < 1 || ilt > 99) {
        return 'Ilość musi być liczbą całkowitą od 1 od 99';
    }
   return null;
}