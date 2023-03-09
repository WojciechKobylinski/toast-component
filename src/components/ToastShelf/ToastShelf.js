import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (<ol 
    className={styles.wrapper}
    role="region"
    aria-label="Notification"
    aria-live="polite">
      {toasts.map( ({id, variant, message}) => (<li className={styles.toastWrapper} key={id}>
        <Toast variant={variant} toastId={id}>{message}</Toast>
      </li>))}
    </ol>
  );
}

export default ToastShelf;
