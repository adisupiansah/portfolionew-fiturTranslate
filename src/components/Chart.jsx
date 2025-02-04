"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartGW = ({ dataProject }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const InisialisasiChartJS = useCallback(() => {
    const ctx = chartRef.current.getContext("2d");

    // Hancurkan chart jika sudah ada
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const bulanLabels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dataPerBulan = bulanLabels.map((bulan, index) => {
      return dataProject.filter((project) => {
        const tanggalCommit = new Date(project.commit);
        return tanggalCommit.getMonth() === index;
      }).length;
    });

    const dataInfo = dataProject.map(
      (project) => `${project.nama} (${project.commit})`
    );

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: bulanLabels,
        datasets: [
          {
            label: "Projects per Month",
            data: dataPerBulan,
            backgroundColor: "rgba(255, 145, 48, 0.8)",
            borderColor: "rgba(33, 33, 33, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              afterBody: (tooltipItems) => {
                const bulanIndex = tooltipItems[0].dataIndex;
                return dataProject
                  .filter((project) => {
                    const tanggalCommit = new Date(project.commit);
                    return tanggalCommit.getMonth() === bulanIndex;
                  })
                  .map((project) => `${project.nama} - ${project.commit}`)
                  .join("\n");
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [dataProject]); // Tambahkan `dataProject` sebagai dependensi

  useEffect(() => {
    InisialisasiChartJS();
  }, [InisialisasiChartJS]);

  return <canvas ref={chartRef} />;
};

export default ChartGW;
