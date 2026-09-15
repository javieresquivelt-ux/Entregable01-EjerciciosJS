import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Detectar dinámicamente todos los archivos HTML en la raíz del proyecto
const htmlFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith('.html'));
const input = {};
htmlFiles.forEach((file) => {
	const name = file.replace(/\.html$/, '');
	input[name] = resolve(__dirname, file);
});

export default defineConfig({
	base: './',
	build: {
		rollupOptions: {
			input,
		},
	},
});
