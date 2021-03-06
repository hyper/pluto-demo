import { Dialog } from '@headlessui/react';
import React from 'react';

export default function PaymentModal({ open, setOpen, transaction }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="z-50 relative">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="flex flex-col bg-gray-100 p-5 space-y-3 rounded">
          <Dialog.Title className="font-bold text-xl">Payment succeeded</Dialog.Title>
          <Dialog.Description>
            Your transaction on the Rinkeby testnet succeeded. View transaction details&nbsp;
            <a
              target="_blank"
              href={`https://rinkeby.etherscan.io/tx/${transaction}`}
              className="text-purple-500 hover:text-purple-700 outline-none"
              rel="noreferrer"
            >
              here
            </a>.
          </Dialog.Description>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-white bg-purple-500 hover:bg-purple-600 rounded py-1 px-2 self-end !mt-5"
          >Restart demo
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
