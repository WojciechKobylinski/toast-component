import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, variant, toastId}) {

  const Icon = ICONS_BY_VARIANT[variant];

  const { deleteToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div> 
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>{children}
      </p>
      <button 
        aria-label="Dismiss message"
        aria-live="off"
      className={styles.closeButton} onClick={() => deleteToast(toastId)}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
