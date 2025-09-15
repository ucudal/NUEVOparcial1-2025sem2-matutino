let nom = document.getElementById("name").value;
let email = document.getElementById("email");
let rol = document.getElementById("role").value;
let addB = document.getElementById("add");
let users = document.getElementById("users"); 
let API_URL = 'http://localhost:5000/users';

async function cargarEmpleados() {
  try {
    const res = await fetch(API_URL);                 
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();                    

    users.innerHTML = ''; 
    data.forEach(renderizarEmpleados);
  } catch (e) {
    console.error('Error al cargar empleados:', e);
    taskList.innerHTML = '<li class="error">No pode cargar los empleados</li>';
  }
}

async function renderizarEmpleados(empleado) {
  const li = document.createElement('li');

  const content = document.createElement('div');
  content.className = 'contenidoUsuario';

  const title = document.createElement('span');
  title.className = 'nombreUsuario';
  title.textContent = empleado.name;

  const actions = document.createElement('div');
  actions.className = 'accionesUsuario';

  const promote = document.createElement('button');
  const demote = document.createElement('button');
  promote.textContent = 'Promote';
  demote.textContent = 'Demote';
  promote.onclick = () => promover(empleado);
  demote.onclick = () => descender(empleado);

  const eliminar = document.createElement('button');
  eliminar.textContent = 'Eliminar empleado';
  eliminar.onclick = () => eliminarEmpleado(empleado.id, li);

  actions.appendChild(promote);
  actions.appendChild(demote);
  actions.appendChild(eliminar);

  content.appendChild(title);
  li.appendChild(content);
  li.appendChild(actions);

  users.appendChild(li);
}

addB.addEventListener('click', async (e) => {
    let newId = users.length +1;
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id:newId, name: nom, role: rol, email: email})
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    nom.value = ''; 
    email.value = ''; 
    await cargarEmpleados();
  } catch (e) {
    console.error('Error al crear tarea:', e);
  }
});

async function promote(empleado) {
    let rolE = empleado.role;
    switch (rolE){
        case "Admin":
            rolE = "Admin";
        case "Editor":
            rolE = "Admin";
        case "Viewer":
            rolE = "Editor";
    }
  try {
    const res = await fetch(`${API_URL}/${empleado.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: rolE})
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await cargarEmpleados();                                
  } catch (e) {
    console.error('Error al actualizar tarea:', e);
  }
}

async function demote(empleado) {
    let rolE = empleado.role;
    switch (rolE){
        case "Admin":
            rolE = "Editor";
        case "Editor":
            rolE = "Viewer";
        case "Viewer":
            rolE = "Viewer";
    }
  try {
    const res = await fetch(`${API_URL}/${empleado.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: rolE})
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await cargarEmpleados();                                
  } catch (e) {
    console.error('Error al actualizar tarea:', e);
  }
}

async function eliminarEmpleado(id, li) {
  try {
    const res = await fetch(`${API_URL}/${id}`, 
      { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await cargarEmpleados();                          
  } catch (e) {
    console.error('Error al borrar tarea:', e);
  }
}

cargarEmpleados();
