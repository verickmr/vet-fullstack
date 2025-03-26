-- CreateTable
CREATE TABLE "Scheduling" (
    "id" SERIAL NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "cpfOrMatricula" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "desiredTime" TEXT NOT NULL,
    "vaccinationCard" TEXT,
    "appointmentDate" TEXT NOT NULL,

    CONSTRAINT "Scheduling_pkey" PRIMARY KEY ("id")
);
