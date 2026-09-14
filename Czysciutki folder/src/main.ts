const addButton: HTMLButtonElement | null = document.querySelector(#todoAddButton);
const inputTextField: HTMLInputElement | null = document.querySelector(#todoInputField);
const todosContainer: HTMLDivElement = document.querySelector(#todosContainer)!;
type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){
    addButton ?. addEventListener('click', (e) => {
        let textValue: string = inputTextField.value;
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextFieldValue});
        inputTextField.value='';
        buildList();
    })
}
function buildList(){
    todosContainer.innerHTML = "";
    array.forEach(element => {
        let container  = document.createElement("div");
        let title = document.createElement('h3');
        let id = document.createElement('p');

        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;

        container.
    });
}