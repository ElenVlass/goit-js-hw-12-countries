import './styles.css';
import { error, success, notice, defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaults.animation = 'fade';
defaults.animateSpeed = 'slow';
defaults.delay= 2000;

export function showError (errorNotification) {
  error({
            text: errorNotification,
})  
};

export function showSuccess (successNotification) {
  success({
            text: successNotification,
})  
}

