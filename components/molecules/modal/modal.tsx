import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import axiosInstance from '@/utils/axios';
import { set, useForm } from 'react-hook-form';
import styles from './styles.module.css';

export const ModalV1 = ({ open, onClose, employeeData }: any) => {
  const router = useRouter();
  const [employees, setEmployees] = useState<IUser[]>([]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`users`);
        setEmployees(response.data);
      } catch (error: any) {
        console.log('error', error);
        if (error.response && error.response.status === 401) {
          router.push('/login');
        } else {
          router.push('/error');
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: any) => {
    try {
      router.push('/pages/success/ticketSent');
      await axiosInstance.post('todos', data);
    } catch (error) {
      console.error('Erro ao criar o ticket:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Repassar demanda - {employeeData?.id}
        </Typography>
        <form className={styles.formGroup}>
          <label>
            Desenvolvedor
            <select {...register('assigned_to')}>
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.id} - {employee.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Desenvolvedor auxiliar
            <select {...register('shared_with')}>
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.id} - {employee.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Prazo
            <input type="date" {...register('date')} />
          </label>
          <input type="hidden" {...register('institution')} value={employeeData?.institution} />
          <input type="hidden" {...register('priority')} value={employeeData?.priority} />
          <input type="hidden" {...register('status')} value={'Pendente'} />
          <input type="hidden" {...register('title')} value={employeeData?.title} />
          <input
            type="hidden"
            {...register('description')}
            value={employeeData?.description + ' - demanda adicionada manualmente'}
          />
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Repassar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
