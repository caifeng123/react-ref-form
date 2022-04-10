import {getSummary} from '../utils/markdown';

export const markdown = getSummary({
    summary: '点击查看示例代码',
    detail: `
import { useEffect } from "react";
import { useForm, RefItem, DEPS, CustomComponent } from "react-ref-form";
import FiledsTable from "../customerComponents/FiledsTable";
import { Input } from "antd";
import { getData } from "../constants";
import { Shine } from "../customerComponents/ui";

const designInfo = [
  {
    label: "换热站设计流量1",
    key: "stationDesignedG1",
    required: true,
    value: ({ value, onChange, error }: CustomComponent) => {
      const onchange = (e: string) => {
        if (e === "123") {
          onChange("①变了 我跟着变", "stationDesignedG2", { atTop: true });
        }
        if (e === '1234') {
          onChange("①变了 我跟着变", "stationDesignedG3", { atTop: true });
        }
        onChange(e);
      };
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Shine key={Math.random()} />
          <Input placeholder="输入123/1234" onChange={(e) => onchange(e.target.value)} value={value} />
          <div style={{ color: "red" }}>{error}</div>
        </div>
      );
    }
  },
  {
    label: "试试21",
    key: "stationDesignedG2",
    value: ({ value, onChange, error }: CustomComponent) => {
      const onchange = (e: string) => {
        if (e === "21") {
          onChange("②变了 我跟着变", "stationDesignedG2", { atTop: true });
        }
        onChange(e);
      };
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Shine key={Math.random()} />
          <Input onChange={(e) => onchange(e.target.value)} value={value} />
          <div style={{ color: "red" }}>{error}</div>
        </div>
      );
    },
    deps: ["stationDesignedG1"]
  },
  {
    label: "换热站设计流量3",
    key: "stationDesignedG3",
    value: Input,
    deps: DEPS.ALL
  },
  {
    label: "换热站设计流量4",
    key: "stationDesignedG4",
    value: FiledsTable
  }
];

export default () => {
  const form = useForm();

  useEffect(() => {
    getData().then((res: any) => form.setFormValue(res));
  }, []);

  return (
    <>
      <h1>基本用法</h1>
      <h3>
        第2项依赖第1项，第三项依赖全部DEPS.ALL，作用是当A满足条件B会重新渲染
      </h3>
      <RefItem colCount={1} labelColSpan={6} options={designInfo} form={form} />
    </>
  );
};
  `,
    language: 'javascript'
});
