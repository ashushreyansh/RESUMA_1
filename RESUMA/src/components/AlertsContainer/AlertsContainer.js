import React, { Fragment } from "react";
import { useSelector } from "react-redux";

// Import Styling
import styles from "./alertsContainer.module.css";

const AlertsContainer = () => {
    const alertsState = useSelector((state) => state.alert);

    return (
        <Fragment>
            <div
                className={`${styles["alert-container"]} d-flex flex-column align-items-center`}
            >
                {alertsState !== null && alertsState.length > 0 ? (
                    <Fragment>
                        {alertsState.map((alert) => {
                            return (
                                <Fragment key={alert.id}>
                                    <div
                                        className={`${styles["alert-item"]} ${
                                            styles[
                                                "alert-item-border-" +
                                                    alert.alertType +
                                                    ""
                                            ]
                                        } alert alert-${alert.alertType} `}
                                        role="alert"
                                    >
                                        <div className="d-flex">
                                            <span
                                                className={`${styles["alert-msg"]} d-inline`}
                                            >
                                                {alert.msg}
                                            </span>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        })}
                    </Fragment>
                ) : (
                    <Fragment></Fragment>
                )}
            </div>
        </Fragment>
    );
};

export default AlertsContainer;
