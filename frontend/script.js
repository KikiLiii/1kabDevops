const API_URL = 'http://localhost:3000/api/tasks';

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    li.classList.add('added'); 
    li.onclick = () => deleteTask(task._id, li);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const title = input.value.trim();
  if (!title) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  input.value = '';
  fetchTasks();
}

async function deleteTask(id, liElement) {
 
  liElement.classList.add('removed');
 
  setTimeout(async () => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
  }, 400); 
}

fetchTasks();
