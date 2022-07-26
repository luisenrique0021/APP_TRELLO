const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let draggableTodo = null;

todos.forEach(todo => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
    console.log("dragstart");
}

function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragend");
}

all_status.forEach(status => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
   // console.log("dragover");
}

function dragEnter() {
    this.style.border = "1px dashed #ccc";
    console.log("dragenter");
}

function dragLeave() {
    this.style.border = "none";
    console.log("dragleave");
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}

const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        //document.querySelector(btn.dataset.target).classList.remove("active");
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
}

/* Crear añadir Tarea */

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo(){
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_input").value;
    const txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    /* Create span */

    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

    no_status.appendChild(todo_div);

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });

    // console.log(todo_div);

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    document.getElementById("todo_input").value = "";
    modal1.classList.remove("active");
    overlay.classList.remove("active");
}

const close_btns2 = document.querySelectorAll(".close");

close_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
    })});