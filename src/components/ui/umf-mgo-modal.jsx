import React from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export const UmfMgoModal = ({ children }) => {
  const umfLevels = [
    { level: "10+", color: "#e87722", mgo: "263+" },
    { level: "15+", color: "#e10600", mgo: "514+" },
    { level: "20+", color: "#ce0f69", mgo: "829+" },
    { level: "24+", color: "#830065", mgo: "1122+" },
    { level: "26+", color: "#0085ca", mgo: "1282+" },
    { level: "28+", color: "#3bad4e", mgo: "1450+" },
    { level: "30+", color: "#203e96", mgo: "1620+" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg bg-white rounded-2xl p-6 sm:p-8">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <span className="text-xs font-bold">i</span>
            </div>
            <DialogTitle className="text-base font-normal text-gray-600">
              What is UMF and MGO?
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* UMF Section */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-gray-900">UMF</span>
              <span className="text-sm text-gray-700">
                is the strength and purity rating of Manuka honey.
              </span>
              <div className="flex gap-1">
                <span className="text-yellow-400 text-lg">🤍</span>
                <span className="text-yellow-400 text-lg">🤍</span>
              </div>
            </div>

            {/* UMF Scale */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                {umfLevels.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-3 h-6 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-gray-700 mt-1 font-medium">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The higher the number, the greater the potency and rarity of
                Manuka honey.
              </p>
            </div>
          </div>

          {/* MGO Section */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-gray-900">MGO</span>
              <span className="text-sm text-gray-700">
                is the key natural compound that gives Manuka honey its special antibacterial strength.
              </span>
            </div>

            {/* MGO Scale */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                {umfLevels.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-3 h-6 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-gray-700 mt-1 font-medium">
                      {item.mgo}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The higher the number, the higher the antibacterial properties in
                the honey.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-center pt-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-800 font-normal"
              onClick={() => {}}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
