import App from './App';
import '@/styles/global.css';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
