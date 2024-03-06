import { useSQLiteContext } from "expo-sqlite/next"

export type CreateGoalDto = {
    name: string
    total: number
}

export function useGoalRepository() {
    const db = useSQLiteContext()

    function create(data: CreateGoalDto) {
        const statement = db.prepareSync("INSERT INTO goals (name, total) VALUES ($name, $total)")

        try {
            statement.executeSync({
                $name: data.name,
                $total: data.total
            })
        } catch (error) {
            throw error
        } finally {
            statement.finalizeSync()
        }
    }

    return {
        create
    }
}