import demands from '../app/pages/demands/styles.module.css';
import todos from '../app/pages/toDo/styles.module.css';

export function getPriorityClassDemands(priority: string): any {
  switch (priority) {
    case 'Urgente':
      return demands.urgente;
    case 'Alta':
      return demands.alta;
    case 'Média':
      return demands.normal;
    default:
      return demands.baixa;
  }
}

export function getPriorityClassTodos(priority: string): any {
  switch (priority) {
    case 'Urgente':
      return todos.urgente;
    case 'Alta':
      return todos.alta;
    case 'Média':
      return todos.normal;
    default:
      return todos.baixa;
  }
}

export function dateFormat(dataString: string): string {
  const data = new Date(dataString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Adicione 1 porque os meses são indexados a partir de 0
  const ano = data.getFullYear().toString().slice(-2);
  const horas = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}
