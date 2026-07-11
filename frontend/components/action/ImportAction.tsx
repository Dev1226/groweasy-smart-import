"use client";

import {
    Rocket,
    ShieldCheck,
    BrainCircuit,
    Clock3,
} from "lucide-react";

interface Props {
    totalRows: number;
    onImport: () => void;
}

export default function ImportAction({
    totalRows,
    onImport,
}: Props) {
    return (
        <div className="mt-8 rounded-3xl border bg-white p-8 shadow-lg">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold">
                        Ready for AI Import
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Everything looks good. You can now send the dataset
                        to AI for intelligent CRM extraction.
                    </p>

                </div>

                <div className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
                    {totalRows} Records
                </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

                <div className="rounded-xl bg-slate-50 p-5">

                    <ShieldCheck className="mb-3 text-emerald-600" />

                    <h3 className="font-semibold">
                        Validation Complete
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        CSV structure verified.
                    </p>

                </div>

                <div className="rounded-xl bg-slate-50 p-5">

                    <BrainCircuit className="mb-3 text-violet-600" />

                    <h3 className="font-semibold">
                        AI Mapping Ready
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Columns detected successfully.
                    </p>

                </div>

                <div className="rounded-xl bg-slate-50 p-5">

                    <Clock3 className="mb-3 text-orange-500" />

                    <h3 className="font-semibold">
                        Estimated Time
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Less than 5 seconds
                    </p>

                </div>

            </div>

            <div className="mt-8 flex justify-end gap-4">

                <button
                    className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-100"
                >
                    Cancel
                </button>

                <button
                    onClick={onImport}
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                    <Rocket size={18} />
                    Import with AI
                </button>

            </div>

        </div>
    );
}