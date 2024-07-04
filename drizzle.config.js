/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai_interview_mocker_owner:BtJ2e4cTsOhN@ep-lively-sun-a53ndd8h.us-east-2.aws.neon.tech/ai_interview_mocker?sslmode=require",
  },
};
