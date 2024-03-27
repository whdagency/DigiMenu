import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Reorder } from "framer-motion";

export default function Arrangement() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="w-full space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Arrangement</h2>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="">
            <p className="text-gray-500 font-medium text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dolore repudiandae fugit, quidem sunt recusandae eligendi nihil.
              Corrupti quis nam vero laborum, iusto voluptate ipsa eos,
              cupiditate culpa voluptatum cum.
            </p>
          </div>

          <Reorder.Group
            values={items}
            onReorder={setItems}
            className="overflow-hidden"
          >
            {items.map((item) => (
              <Reorder.Item key={item} value={item}>
                <Card
                  key={item}
                  className="mt-8 w-[800px] mx-auto border border-accent cursor-grab hover:bg-accent transition-colors duration-300"
                >
                  <CardHeader className="p-6 pb-3">
                    <CardTitle className="text-lg">Order {item}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, inventore doloribus fuga eligendi iusto quis vel
                      natus quam in totam numquam amet rem officia quaerat id
                      maiores adipisci sint molestiae.
                    </p>
                  </CardContent>
                </Card>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
