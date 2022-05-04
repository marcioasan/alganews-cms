import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Confirm from '../../app/components/Confirm/Confirm';

interface ConfirmProps {
  title: string
  //10.22. Desafio - Migrar features para os Hooks - 1'30"
  onConfirm?: (...args: any[]) => void
  onCancel?: (...args: any[]) => void
}

export default function confirm(props: ConfirmProps) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: 'confirm-overlay',
      customUI: ({ onClose }) => {
        return (
          <Confirm 
            title={ props.title }
            onConfirm={() => {
              if(props.onConfirm)
                props.onConfirm()
              onClose()
            }}
  
            onCancel={() => {
              if(props.onCancel)
                props.onCancel()
              onClose()
            }}
  
          />
        );
      }
    });     
  }, 0);
}