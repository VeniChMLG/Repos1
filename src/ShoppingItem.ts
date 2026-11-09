export class ListaZakopow {
    id: number;
    nazwa: string;
    ilosc: number;
    jestKupiony: boolean;
    constructor(id: number, nazwa: string, ilosc: number, jestKupiony:boolean=false) {
        this.id = id;
        this.nazwa = nazwa;
        this.ilosc = ilosc;
    }
    toggle(): void {
        this.jestKupiony = !this.jestKupiony;
    }
    render(): HTMLElement {
        const div = document.createElement('div');
        div.className = 'produkt';
        div.setAttribute('data-id', this.id.toString());
        if(this.jestKupiony) {
            div.classList.add('kupiony');
        }

        div.innerHTML = `
        <span class="nazwa-produktu">${this.nazwa}</span>
        <span class="ilosc-produktow">${this.ilosc}</span>
        <button class="toggle-btn">${this.jestKupiony ? 'Cofnij' : 'Kupione'}</button>
        <button class="delete-btn">Usuń</button>
        `;
        return div;
    }
}