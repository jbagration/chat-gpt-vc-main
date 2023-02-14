"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModalSelection() {
  const { data: models, isLoading } = useSWR("@models-engines", fetchModels);

  const { data: selectedModel, mutate: setModel } = useSWR("@model-selected", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        options={models?.modelOptions}
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        defaultValue={selectedModel}
        placeholder={selectedModel}
        // value={selectedModel}
        // classNames={{
        //   control: (state) => "bg-[#434654] border-[#434654]",
        // }}
        // placeholder
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModalSelection;
