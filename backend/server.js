const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const Family = require('./models/family');
const ExcelJS = require('exceljs');
const familyRoutes = require('./routes/family');
const savingsRoutes = require('./routes/savings');
const transactionRoutes = require('./routes/transaction');
const categoryAnalysisRoutes = require('./routes/category');




const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.Mongo_Uri)
    .then(() => {
        console.log('mongodb connected')
    }).catch((error) => {
        console.log(error)
    })



// Import route to upload data from Excel
app.post('/import-excel', async (req, res) => {
    const filePath = 'C:/Users/DELL/OneDrive/Desktop/MERN/Family-Expense-Insights/backend/family-expenses-data.xlsx'; // Adjust with your file path
    const workbook = new ExcelJS.Workbook();

    try {
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);

        const data = [];
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return; // Skip header row
            data.push({
                familyId: row.getCell(1).value,
                memberId: row.getCell(2).value,
                transactionDate: new Date(row.getCell(3).value),
                category: row.getCell(4).value,
                amount: row.getCell(5).value,
                income: row.getCell(6).value,
                savings: row.getCell(7).value,
                monthlyExpenses: row.getCell(8).value,
                loanPayments: row.getCell(9).value,
                creditCardSpending: row.getCell(10).value,
                dependents: row.getCell(11).value,
                financialGoalsMet: row.getCell(12).value,
            });
        });

        // Save data to MongoDB
        await Family.insertMany(data);
        res.status(201).send('Data imported successfully');
    } catch (error) {
        res.status(500).send('Error importing data');
    }
});



app.use('/', familyRoutes, savingsRoutes, transactionRoutes, categoryAnalysisRoutes);






app.listen(7000, () => {
    console.log(`server is running on 7000`)
})