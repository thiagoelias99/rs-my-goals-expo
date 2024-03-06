import { databaseInit } from "@/database/init"
import { Slot } from "expo-router"
import { SQLiteProvider } from "expo-sqlite/next"

export default function Layout() {
    return (
        <SQLiteProvider
            databaseName="app.db"
            onInit={databaseInit}
        >
            <Slot />
        </SQLiteProvider>
    )
}