import { FC, useEffect, useRef, useState } from "react";
import { TDashboardComponentProps } from "../../layouts/types";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import React from "react";
import { DashboardCard } from "../../card/DashboardCard";
import { DataSummary } from "../../summary/DataSummary";
import { TDashboardCardOptionActions } from "../../card/types";
import { Skeleton } from "@material-ui/lab";
import { getAdmissions } from "../../../../../state/admissions/actions";
import { IOwnProps } from "../types";
import { Piechart } from "../../../charts/pie/Piechart";
import DataDownloadButton from "../../../dataDownloadButton/DataDownloadButton";
import { useAdmBySexData } from "../../../../../libraries/dashboardUtils/admissions/useAdmBySexData";

import "../../card/styles.scss";

export const AdmissionsBySex: FC<TDashboardComponentProps & IOwnProps> = ({
  onRemove,
  onFullScreenEnter,
  period,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const admissionbysexcardref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getAdmissions({ admissionrange: period }));
  }, [dispatch, period]);

  const { total, success, status, data, csvData } = useAdmBySexData();

  const [displaySize, setDisplaySize] =
    useState<{ width: number; height: number }>();

  const onSizeChange = (width: number, height: number) => {
    setDisplaySize({ width: width - 1, height: height - 73 });
  };

  const downloadOptions = (
    <DataDownloadButton
      csvData={csvData}
      title={t("admission.admissionbysex").replace(/ /g, "-")}
      graphRef={admissionbysexcardref}
    />
  );

  const actions: TDashboardCardOptionActions = {
    onClose: onRemove ? () => onRemove() : undefined,

    onExpand: onFullScreenEnter ? () => onFullScreenEnter() : undefined,

    downloadButton: downloadOptions,
  };

  return (
    <>
      {status === "LOADING" && (
        <div className="item">
          <Skeleton />
        </div>
      )}

      {success && (
        <DashboardCard
          cardRef={admissionbysexcardref}
          title={t("admission.admissionbysex")}
          actions={actions}
          sizeChangeHandler={onSizeChange}
        >
          <Piechart
            data={data}
            width={displaySize?.width ? `${displaySize.width}px` : "320px"}
            height={displaySize?.height ? `${displaySize.height}px` : "320px"}
          />
          <DataSummary
            label={t("admission.admregistered")}
            value={total.toString()}
          />
        </DashboardCard>
      )}
    </>
  );
};
