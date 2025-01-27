document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterTasks = document.getElementById('filterTasks');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    }

    function saveTasks() {
        const tasks = Array.from(taskList.children).map(task => ({
            text: task.querySelector('.task-text').textContent,
            completed: task.classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTaskToDOM(text, completed = false) {
        const li = document.createElement('li');
        li.classList.add('task');
        li.setAttribute('draggable', 'true');
        if (completed) li.classList.add('completed');

        li.innerHTML = `
            <span class="task-text" contenteditable="true">${text}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.querySelector('.task-text').addEventListener('input', saveTasks);

        taskList.appendChild(li);
        saveTasks();
    }

    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim()) {
            addTaskToDOM(taskInput.value);
            taskInput.value = '';
        }
    });

    filterTasks.addEventListener('change', () => {
        const filter = filterTasks.value;
        Array.from(taskList.children).forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                    break;
                case 'pending':
                    task.style.display = task.classList.contains('completed') ? 'none' : '';
                    break;
            }
        });
    });

    let draggedItem = null;
    taskList.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        setTimeout(() => e.target.style.display = 'none', 0);
    });

    taskList.addEventListener('dragend', (e) => {
        setTimeout(() => e.target.style.display = '', 0);
        draggedItem = null;
        saveTasks();
    });

    taskList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(taskList, e.clientY);
        if (afterElement == null) {
            taskList.appendChild(draggedItem);
        } else {
            taskList.insertBefore(draggedItem, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    loadTasks();
});
