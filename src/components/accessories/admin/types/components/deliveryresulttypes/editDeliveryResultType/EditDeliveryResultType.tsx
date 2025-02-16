import { useAppDispatch, useAppSelector } from "libraries/hooks/redux";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useLocation, useParams } from "react-router";
import { PATHS } from "../../../../../../../consts";
import { DeliveryResultTypeDTO } from "../../../../../../../generated";
import { setTypeMode } from "../../../../../../../state/types/config";
import { updateDeliveryResultType } from "../../../../../../../state/types/deliveryResults";
import DeliveryResultTypeForm from "../deliveryResultTypeForm/DeliveryResultTypeForm";
import { getInitialFields } from "../deliveryResultTypeForm/consts";
import "./styles.scss";

export const EditDeliveryResultType = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { state }: { state: DeliveryResultTypeDTO | undefined } = useLocation();
  const { code } = useParams();
  
  const update = useAppSelector((state) => state.types.deliveryResult.update);
  const mode = useAppSelector((state) => state.types.config.mode);

  const handleSubmit = (value: DeliveryResultTypeDTO) => {
    dispatch(updateDeliveryResultType(value));
  };

  useEffect(() => {
    if (mode !== "edit") {
      dispatch(setTypeMode("edit"));
    }
  }, [mode, dispatch]);

  if (state?.code !== code) {
    return <Navigate to={PATHS.admin_delivery_result_types} />;
  }

  return (
    <div className="editDeliveryResultType">
      <h3 className="title" data-cy="sub-activity-title">
        {t("deliveryResultType.editDeliveryResultType")}
      </h3>
      <DeliveryResultTypeForm
        creationMode={false}
        onSubmit={handleSubmit}
        isLoading={!!update.isLoading}
        resetButtonLabel={t("common.cancel")}
        submitButtonLabel={t("deliveryResultType.updateDeliveryResultType")}
        fields={getInitialFields(state)}
      />
    </div>
  );
};
