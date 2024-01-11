import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { Button } from '@mui/material';

export default function DemandForm({ onSubmit }: any) {
  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.containerForm}>
      <h1>Criar Demanda - ToDo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formGroup}>
          Título
          <input {...register('title')} placeholder="Digite o título" />
        </label>

        <label className={styles.formGroup}>
          Descrição
          <textarea {...register('description')} placeholder="Digite a descrição" />
        </label>

        <label className={styles.formGroup}>
          Informações Técnicas
          <textarea {...register('complement')} placeholder="Digite as informações técnicas" />
        </label>

        <label className={styles.formGroup}>
          Desenvolvedor
          <select {...register('assigned_to')}>
            <option value="1">Diego</option>
            <option value="2">João</option>
            <option value="3">Rodrigo</option>
          </select>
        </label>

        <label className={styles.formGroup}>
          Desenvolvedor - Aux
          <select {...register('shared_with')}>
            <option value="0">Nínguem</option>
            <option value="1">Diego</option>
            <option value="2">João</option>
            <option value="3">Rodrigo</option>
          </select>
        </label>

        <label className={styles.formGroup}>
          Prioridade
          <select {...register('priority')}>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
            <option value="Urgente">Urgente</option>
          </select>
        </label>

        <label className={styles.formGroup}>
          Prazo
          <input {...register('due_date')} type="date" />
        </label>

        <Button variant="contained" type="submit">
          Criar
        </Button>
      </form>
    </div>
  );
}
