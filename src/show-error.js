import './styles.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";

export default function showError (errorNotification) {
  error({
            text: errorNotification,
            delay: 2000,
            animation: 'fade',
            animateSpeed: 'slow',
})  
}
