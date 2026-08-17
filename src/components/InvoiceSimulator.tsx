import React, { useState } from 'react';
import { Calculator, Printer, Plus, Trash2, CheckCircle2, Scissors, Receipt } from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export const InvoiceSimulator: React.FC = () => {
  const [clientName, setClientName] = useState('Mr. Kishan Master');
  const [orderDate, setOrderDate] = useState('27-OCT-2025');
  const [invoiceNo, setInvoiceNo] = useState('471554');
  const [advancePaid, setAdvancePaid] = useState(2000);

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: "Men's Suit (2-piece)", quantity: 1, rate: 5000 },
    { id: '2', description: 'Shirt Stitching', quantity: 2, rate: 800 },
    { id: '3', description: 'Trouser Stitching', quantity: 1, rate: 700 },
  ]);

  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemQty, setNewItemQty] = useState(1);
  const [newItemRate, setNewItemRate] = useState(1000);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemDesc.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        description: newItemDesc,
        quantity: Number(newItemQty),
        rate: Number(newItemRate),
      },
    ]);
    setNewItemDesc('');
    setNewItemQty(1);
    setNewItemRate(1000);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.rate, 0);
  const balanceDue = Math.max(0, subtotal - Number(advancePaid));

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="invoice-demo" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
            Interactive M.K Tailors Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            Tailoring Invoice & Receipt Generator
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Based on Eshan Sanjot's Bano Qabil final project invoice design. Customize items, calculate subtotal, advance, and balance due dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Control Panel */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-orange-600" />
              Order Parameters
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Client Name</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Invoice No.</label>
                  <input
                    type="text"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Date</label>
                  <input
                    type="text"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Advance Paid (Rs.)</label>
                <input
                  type="number"
                  value={advancePaid}
                  onChange={(e) => setAdvancePaid(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Add Custom Item Form */}
            <form onSubmit={addItem} className="pt-4 border-t border-stone-200 space-y-4">
              <h4 className="font-serif font-bold text-stone-900 text-sm">Add Item to Bill</h4>
              <div>
                <input
                  type="text"
                  placeholder="Service / Garment description"
                  value={newItemDesc}
                  onChange={(e) => setNewItemDesc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    placeholder="Qty"
                    min="1"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Rate (Rs.)"
                    value={newItemRate}
                    onChange={(e) => setNewItemRate(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-stone-900 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </form>
          </div>

          {/* Right Live Invoice Preview */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border-2 border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              {/* Receipt Header */}
              <div className="flex justify-between items-start border-b border-stone-200 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center font-serif font-bold">
                    MK
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-lg text-stone-900">MASTER KISHAN</h3>
                    <span className="text-xs text-orange-600 font-semibold">PROFESSIONAL MEN'S TAILORING & STITCHING</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase text-stone-400 block font-semibold">Invoice No.</span>
                  <span className="font-mono font-bold text-stone-900">{invoiceNo}</span>
                  <span className="text-xs text-stone-500 block mt-1">{orderDate}</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="mb-6 bg-stone-50 p-4 rounded-xl text-sm flex justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Customer Name</span>
                  <strong className="text-stone-900">{clientName}</strong>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Location</span>
                  <strong className="text-stone-900 text-xs">Shop#23, Mehran Centre, Karachi</strong>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 text-xs uppercase">
                      <th className="pb-3">Description</th>
                      <th className="pb-3 text-center">Qty</th>
                      <th className="pb-3 text-right">Rate (Rs.)</th>
                      <th className="pb-3 text-right">Amount (Rs.)</th>
                      <th className="pb-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3 font-medium text-stone-800">{item.description}</td>
                        <td className="py-3 text-center text-stone-600">{item.quantity}</td>
                        <td className="py-3 text-right text-stone-600">{item.rate.toLocaleString()}</td>
                        <td className="py-3 text-right font-medium text-stone-900">
                          {(item.quantity * item.rate).toLocaleString()}
                        </td>
                        <td className="py-3 text-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals Summary */}
              <div className="bg-stone-50 p-6 rounded-xl space-y-3 border border-stone-200">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-medium text-stone-900">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Advance Paid</span>
                  <span className="font-medium text-orange-600">- Rs. {Number(advancePaid).toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-stone-200 flex justify-between text-base font-bold">
                  <span className="text-stone-900">Balance Due</span>
                  <span className="text-stone-900">Rs. {balanceDue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 italic">"Where every stitch defines perfection." — Eshan Sanjot</span>
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-sm flex items-center gap-2 hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4" /> Print / Export Invoice
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
