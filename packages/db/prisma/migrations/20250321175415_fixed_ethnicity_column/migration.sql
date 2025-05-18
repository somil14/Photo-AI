/*
  Warnings:

  - Changed the type of `ethnicity` on the `Model` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EthenicityEnum" AS ENUM ('White', 'Black', 'Asian American', 'East Asian', 'South East Asian', 'South Asian', 'Hispanic', 'Middle Eastern', 'Pacific');

-- AlterTable
ALTER TABLE "Model" DROP COLUMN "ethnicity",
ADD COLUMN     "ethnicity" "EthenicityEnum" NOT NULL;

-- DropEnum
DROP TYPE "EthinicityEnum";
