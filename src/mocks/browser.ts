import { setupWorker } from 'msw'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)

// put start into own command, in order to configure everything in
// this file and not somewhere else
export const start = () => {
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}